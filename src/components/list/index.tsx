import React, { useContext } from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Row, Card } from "antd";
import { TablePaginationConfig } from "antd/lib/table";
import { PlusSquareOutlined } from "@ant-design/icons";
import humanizeString from "humanize-string";

import { DataContext } from "@contexts/data";
import { TableProps } from "@components/table";
import { GetListResponse, IDataContext } from "@interfaces";

export interface ListProps {
    resourceName?: string;
    canCreate?: boolean;
    canEdit?: boolean;
    canDelete?: boolean;
}

export const List: React.FC<ListProps> = ({
    resourceName,
    canCreate,
    canEdit,
    canDelete,
    children,
}) => {
    const { getList } = useContext<IDataContext>(DataContext);
    const queryParams = new URLSearchParams(useLocation().search);
    const history = useHistory();

    if (!resourceName) {
        // TODO: render resource error page
        return <span>params error</span>;
    }

    let current = 1;
    const queryParamCurrent = queryParams.get("current");
    if (queryParamCurrent) {
        current = +queryParamCurrent;
    }

    let pageSize = 10;
    const queryParamPageSize = queryParams.get("pageSize");
    if (queryParamPageSize) {
        pageSize = +queryParamPageSize;
    }

    const { data, isFetching } = useQuery<GetListResponse>(
        [`resource/list/${resourceName}`, { current, pageSize }],
        () =>
            getList(resourceName, {
                pagination: {
                    current,
                    pageSize,
                },
            }),
        {
            keepPreviousData: true,
        },
    );

    const pagination: TablePaginationConfig = {
        total: data?.total,
        current,
        pageSize,
        defaultCurrent: 1,
        defaultPageSize: 10,
        position: ["bottomCenter"],
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement<TableProps>(child, {
                resourceName,
                dataSource: data?.data,
                loading: isFetching,
                pagination,
                canEdit,
                canDelete,
            });
        }
        return child;
    });

    return (
        <Card
            bodyStyle={{ padding: 0 }}
            title={humanizeString(resourceName)}
            extra={
                canCreate && (
                    <Button
                        onClick={() =>
                            history.push(`/resources/${resourceName}/create`)
                        }
                        type="default"
                        icon={<PlusSquareOutlined />}
                    >
                        Create
                    </Button>
                )
            }
        >
            <Row>{childrenWithProps}</Row>
        </Card>
    );
};