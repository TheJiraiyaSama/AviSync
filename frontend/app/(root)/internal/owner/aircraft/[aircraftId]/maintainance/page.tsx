import CInput from "@/components/custom/Inputs/CInput";
import { MaintainanceRecords, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<MaintainanceRecords[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            slno: 1,
            log: "100",
            status: "pending",
            user: "m@example.com",
            time: "12-Oct-23",
        },
        {
            id: "728ed53f",
            slno: 1,
            log: "200",
            status: "failed",
            user: "m@example.com",
            time: "12-Oct-23",
        },

        {
            id: "728ed62f",
            slno: 1,
            log: "300",
            status: "success",
            user: "m@example.com",
            time: "12-Oct-23",
        },
        // ...
    ];
}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
