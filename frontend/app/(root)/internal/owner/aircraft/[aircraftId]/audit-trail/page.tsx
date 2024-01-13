import { Audit, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Audit[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            user: "Arham",
            wallet: "m@example.com",
            action: "pending",
            time: "12-Oct-23",
        },
        {
            id: "728ed53f",
            user: "Abbe",
            wallet: "m@example.com",
            action: "pending",
            time: "13-Oct-23",
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
