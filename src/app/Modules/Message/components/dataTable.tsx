/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useState } from 'react';
import { Button } from 'primereact/button';

const messageData = [
    {
        id: 1,
        name: 'أحمد علي',
        email: 'ahmed.ali@example.com',
        nationalId: '12345678901234',
        qualification: 'بكالوريوس علوم الحاسوب',
        academicAdvisor: 'د. أيمن حسن',
    },
    {
        id: 2,
        name: 'سارة محمد',
        email: 'sara.mohamed@example.com',
        nationalId: '98765432109876',
        qualification: 'بكالوريوس هندسة',
        academicAdvisor: 'د. منى خليل',
    },
    {
        id: 2,
        name: 'سارة محمد',
        email: 'sara.mohamed@example.com',
        nationalId: '98765432109876',
        qualification: 'بكالوريوس هندسة',
        academicAdvisor: 'د. منى خليل',
    },
];

type Message = {
    id: number;
    name: string;
    email: string;
    nationalId: string;
    qualification: string;
    academicAdvisor: string;
};

export default function MessagesDataTable() {
    const [messages, setMessages] = useState<Message[]>(messageData);

    const actionsTemplate = (row: Message) => {
        return (
            <div className="min-w-40 space-x-2">
                <Button
                    icon="pi pi-pencil"
                    rounded
                    text
                    raised
                    severity="success"
                    aria-label="تعديل"
                    style={{ borderRadius: '50%', width: '2.6rem', height: '2.6rem', marginLeft:'10px' }}
                    tooltipOptions={{ position: 'bottom' }}
                    tooltip="تعديل"
                    onClick={() => handleEditClick(row)}
                />
                <Button
                    icon="pi pi-trash"
                    rounded
                    text
                    raised
                    severity="danger"
                    aria-label="حذف"
                    style={{ borderRadius: '50%', width: '2.6rem', height: '2.6rem' }}
                    tooltipOptions={{ position: 'bottom' }}
                    tooltip="حذف"
                    onClick={() => handleDeleteClick(row)}
                />
            </div>
        );
    };

    const handleEditClick = (message: Message) => {
        console.log('تعديل الطالب:', message);
        // Add your edit logic here
    };

    const handleDeleteClick = (message: Message) => {
        console.log('حذف الطالب:', message);
        setMessages((prevMessages) => prevMessages.filter((s) => s.id !== message.id));
    };

    return (
        <div className="mt-4" dir="rtl">
            <DataTable
                value={messages}
                tableStyle={{
                    minWidth: '50rem',
                    border: 'none',
                    borderRadius: '10px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.10)',
                }}
                paginator
                rows={10}
                rowsPerPageOptions={[10, 25, 50]}
            >
                <Column
                    field="name"
                    header="اسم الطالب"
                />
                <Column
                    field="email"
                    header="البريد الإلكتروني"
                />
                <Column
                    field="nationalId"
                    header="الرقم القومي"
                />
                <Column
                    field="qualification"
                    header="المؤهل"
                />
                <Column
                    field="academicAdvisor"
                    header="المشرف الأكاديمي"
                />
                <Column
                    header="الإجراءات"
                    body={(rowData) => actionsTemplate(rowData)}
                />
            </DataTable>
        </div>
    );
}
