/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { PageTitle } from '../../../Shared/PageTitle';
import CreateButton from '../../../Shared/createButton';
import MessagesDataTable from '../components/dataTable';
// import UpsertMessageForm from '../components/Upsert';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';


export default function MessagesPage() {

  const [filter, setFilter] = useState<any>({});
  // const handleAddButton = () => {
  //   setMessage({});
  //   setOpen(true);
  // };

  const renderHeader = () => (
    <>
      <div className="d-flex justify-content-between align-items-center w-100 px-6 pt-4 gap-1">
        <div className="d-flex flex-column col-3 my-1">

          <Dropdown
            value={filter.IsCompany}
            options={[
              { id: true, name: '	د. أيمن حسن' },
              { id: false, name: '	د. منى خليل' },
            ]}
            onChange={(e) => setFilter({ ...filter, IsCompany: e.value })}
            className="w-100"
            placeholder= 'المشرف الاكاديمي'
            optionValue="id"
            optionLabel="name"
            showClear
            filter
          />
        </div>
        <div className="d-flex flex-column col-3 my-1">

          <Dropdown
            value={filter.q}
            options={[
              { id: true, name: 'بكالوريوس علوم الحاسوب' },
              { id: false, name: 'بكالوريوس علوم الحاسوب' },
            ]}
            onChange={(e) => setFilter({ ...filter, q: e.value })}
            className="w-100"
            placeholder= 'المؤهل'
            optionValue="id"
            optionLabel="name"
            showClear
            filter
          />
        </div>

        <div className="d-flex flex-column col-3 my-1">
          <InputText
            name="id"
            value={filter.id || ''}
            onChange={(e) => setFilter({ ...filter, id: e.target.value })}
            className="w-100"
            placeholder='الرقم القومي'

          />
        </div>
        <div className="d-flex flex-column col-3 my-1">
          <InputText
            name="name"
            value={filter.name || ''}
            onChange={(e) => setFilter({ ...filter, name: e.target.value })}
            className="w-100"
            placeholder='الاسم'

          />
        </div>


      </div>
      <div className="d-flex justify-content-between align-items-center w-100 px-6 pt-4">
        <div className="d-flex gap-3">
          <CreateButton
            title="إضافة "
            // onClick={handleAddButton}
          />
            
        </div>
        <PageTitle pageTitle="الرساله" />
      </div>
    </>
  );
  const header = renderHeader();

  return (
    <div className="p-5">
      {header}

      <div>
        <MessagesDataTable
        // students={mockStudents}
        />
      </div>
{/* 
      <UpsertMessageForm
        open={open}
        initialValues={message}
        mode={message.id ? 'edit' : 'add'}
        onClose={() => setOpen(false)}
      /> */}
    </div>
  );
}
