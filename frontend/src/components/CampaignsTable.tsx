import {ICampaign} from "../types";
import {Avatar, Group, Text} from "@mantine/core";
import CampaignsData from "../link/Campaigns";
import {DataTable} from "mantine-datatable";
import {useEffect, useState} from "react";

const PAGE_SIZE = 10;

const CampaignsTable = () => {
    const [page, setPage] = useState(1);
    const [records, setRecords] = useState(CampaignsData.campaigns.slice(0, PAGE_SIZE));

    useEffect(() => {
        const from = (page - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE;
        setRecords(CampaignsData.campaigns.slice(from, to));
    }, [page]);

    return (
        <DataTable
            columns={[
                {
                    accessor: 'createdBy',
                    render: ({createdBy, createdByImage}: ICampaign) =>
                        <Group>
                            <Avatar src={createdByImage} alt={`${createdBy} profile avatar`} size="sm" radius="xl"/>
                            <Text>{createdBy}</Text>
                        </Group>
                },
                {accessor: 'title'},
                {accessor: 'category'},
                {accessor: 'amountRaised'},
                {accessor: 'goal'},
                {accessor: 'contributors'},
                {accessor: 'country'}
            ]}
            records={records}
            totalRecords={CampaignsData.campaigns.length}
            recordsPerPage={PAGE_SIZE}
            page={page}
            onPageChange={(p) => setPage(p)}
            highlightOnHover
            verticalSpacing="sm"
        />
    );
};

export default CampaignsTable;
