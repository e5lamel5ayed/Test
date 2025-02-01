/* eslint-disable @typescript-eslint/no-explicit-any */
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Istudent } from '../../../interfaces/_studentModels';
import { Sidebar } from 'primereact/sidebar';
import { useQueryClient } from '@tanstack/react-query';
import { getStudentProfile } from '../../../Apis/studentApis';


type Props = {
    studentData: Istudent[];
    // onEdit: (data: Istudent) => void;

};


export default function StudentsDataTable({
    studentData,
    // onEdit
}: Props) {
    const [selectedStudent, setSelectedStudent] =
        useState<number>(0);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const queryClient = useQueryClient();
    useEffect(() => {
        if (selectedStudent) {
            (async () => {
                const data = await getStudentProfile(selectedStudent);
                if (data) {
                    // onEdit(data);
                    setSelectedStudent(0);
                }
            })();
        }
    }, [selectedStudent]);

    const handleViewClick = (Student: Istudent) => {
        setSelectedStudent(Student.id);
        setSidebarVisible(true);
    };

    const handleEditClick = (Student: Istudent) => {
        setSelectedStudent(Student.id);
    };

    const actionsTemplate = (row: Istudent) => {
        return (
            <div className="min-w-40 space-x-2">
                <Button
                    icon="pi pi-pencil"
                    rounded
                    text
                    raised
                    severity="success"
                    aria-label="تعديل"
                    style={{ borderRadius: '50%', width: '2.6rem', height: '2.6rem', marginLeft: '10px' }}
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
                // onClick={() => handleDeleteClick(row)}
                />
                <Button
                    icon="pi pi-eye"
                    rounded
                    text
                    raised
                    aria-label="View"
                    style={{
                        borderRadius: '50%',
                        width: '2.6rem',
                        height: '2.6rem',
                        marginLeft: '10px',
                    }}
                    tooltipOptions={{ position: 'bottom' }}
                    tooltip="View"
                    severity="info"
                    onClick={() => handleViewClick(row)}
                />
            </div>
        );
    };

    return (
        <div className="mt-4" dir="rtl">
            <DataTable
                value={studentData}
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
                    field="fullName"
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
                    field="address"
                    header="العنوان"
                />
                <Column
                    field="placeOfBirth"
                    header="مكان الميلاد"
                />
                <Column
                    header="الإجراءات"
                    body={(rowData) => actionsTemplate(rowData)}
                />
            </DataTable>
            <Sidebar
                dismissable={false}
                modal
                visible={sidebarVisible}
                onHide={() => {
                    setSidebarVisible(false);
                    setSelectedStudent(0);
                    queryClient.invalidateQueries({
                        queryKey: ['getAllStudent'],
                    });
                }}
                header='Student Details'
                position="right"
                style={{ width: '70em' }}
            >
                {/* {selectedStudent && (
                    <StudentDetails selectedStudent={selectedStudent} />
                )} */}
            </Sidebar>
        </div>

    );
}
