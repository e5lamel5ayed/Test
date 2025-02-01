// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Controller, useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { Sidebar } from "primereact/sidebar";
// import { useMutation } from "@tanstack/react-query";
// import Input from "../../../Shared/input";
// import ActionButton from "../../../Shared/actionButton";
// import CancelAction from "../../../Shared/cancelAction";
// import { useEffect } from "react";
// import DropDownInput from "../../../Shared/DropDownInput";
// import { Calendar } from "primereact/calendar";
// import HomeIcon from "@mui/icons-material/Home";
// import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
// import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// interface Message {
//   name: string;
//   nationalId: string;
//   email: string;
//   placeOfBirth: string;
//   dateOfBirth: string;
//   address: string;
//   qualification: string;
//   graduationYear: number;
//   department: string;
//   specialization: string;
//   totalGrade: string;
//   enrolledDegree: string;
//   enrollmentDate: string;
//   academicAdvisor: string;
// }

// type Props = {
//   open: boolean;
//   initialValues: Message;
//   mode: "add" | "edit";
//   onClose: () => void;
// };

// const UpsertMessageForm = ({ open, initialValues, mode, onClose }: Props) => {
//   const form = useForm<Message>({
//     criteriaMode: "all",
//     mode: "onChange",
//     defaultValues: {
//       ...initialValues,
//     },
//   });

//   useEffect(() => {
//     if (initialValues) {
//       form.reset({
//         ...initialValues,
//       });
//     }
//   }, [initialValues, mode]);

//   const { mutate: upsertmessageMutation } = useMutation({
//     mutationFn: (data: Message) => {
//       // Replace with actual API call
//       return Promise.resolve();
//     },
//     onSuccess: () => {
//       toast.success(
//         mode === "edit"
//           ? "تم تحديث بيانات الطالب بنجاح!"
//           : "تم إضافة الطالب بنجاح!"
//       );
//       onClose();
//     },
//     onError: () => {
//       toast.error(
//         mode === "edit" ? "فشل في تحديث بيانات الطالب." : "فشل في إضافة الطالب."
//       );
//     },
//   });

//   const onSubmit = (values: Message) => {
//     upsertMessageMutation(values);
//   };

//   const customHeader = (
//     <div className="flex align-items-center gap-2">
//       <span className="font-bold fs-1">
//         {mode === "edit" ? "Edit Student" : ""}
//       </span>
//     </div>
//   );

//   return (
//     <Sidebar
//       position="left"
//       visible={open}
//       style={{ width: "70vw" }}
//       modal
//       onHide={() => {
//         form.reset();
//         onClose();
//       }}
//       header={customHeader}
//       dismissable={false}
//     >
//       <form onSubmit={form.handleSubmit(onSubmit)}>
//         <div
//           className="d-flex flex-row flex-wrap mt-3"
//           style={{ direction: "rtl" }}
//         >
//           <div className="col-md-12 col-12 mt-3">
//             <div
//               className="my-2 p-1 d-flex gap-2 rounded-2 align-items-center mb-4"
//               style={{ margin: "0 -8px", backgroundColor: "#F1F1F4 " }}
//             >
//                <MailOutlineIcon   sx={{color:'#000'}}/>
//               <h5 className="mt-0 mt-2 ">بيانات  الرساله</h5>
//             </div>
//           </div>
//           <div className="col-md-4 mt-2 p-2">
//             <Input
//               register={form.register}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "name",
//                 title: "اسم الطالب",
//                 maxLength: 100,
//                 isRequired: true,
//               }}
//             />
//           </div>
//           <div className="col-md-4 mt-2 p-2">
//             <Input
//               register={form.register}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "nationalId",
//                 title: " الدرجة المقيد عليها",
//                 maxLength: 14,
//                 isRequired: true,
//               }}
//             />
//           </div>
//           <div className="col-md-4 mt-2 p-2">
//             <Input
//               register={form.register}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "email",
//                 title: " القسم",
//                 maxLength: 100,
//                 isRequired: true,
//               }}
//             />
//           </div>
//           <div className="col-md-4 mt-2 p-2">
//             <Input
//               register={form.register}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "placeOfBirth",
//                 title: "التخصص ",
//                 maxLength: 100,
//                 isRequired: true,
//               }}
//             />
//           </div>
//           <div className="col-md-4 col-12 mt-1 p-2">
//             <label
//               className="form-label"
//               style={{ color: "rgb(0, 0, 0)" }}
//               htmlFor="joinDate"
//             >
//                تاريخ التسجيل
//             </label>
//             <Controller
//               control={form.control}
//               name="joinDate"
//               render={({ field }) => (
//                 <Calendar
//                   style={{ direction: "ltr" }}
//                   showIcon
//                   // placeholder='تاريخ الميلاد'
//                   onChange={(e) => field.onChange(e.value || new Date())}
//                   value={field.value || null}
//                   className="w-100"
//                 />
//               )}
//             />
//           </div>

//           <div className="col-md-4 mt-2 p-2">
//             <Input
//               register={form.register}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "address",
//                 title: "عام التسجيل",
//                 maxLength: 200,
//                 isRequired: true,
//               }}
//             />
//           </div>
         
        
//           <div className="col-md-6 mt-2 p-2">
//             <Input
//               register={form.register}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "graduationYear",
//                 title: "عنوان الرسالة باللغة العربية ",
//                 type: "string",
//                 isRequired: true,
//               }}
//             />
//           </div>
          
//           <div className="col-md-6 mt-2 p-2">
//             <Input
//               register={form.register}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "graduationYear",
//                 title: " عنوان الرسالة باللغة الانجليزية",
//                 type: "string",
//                 isRequired: true,
//               }}
//             />
//           </div>
         

//            <div className="col-md-4 col-12 mt-2 p-2">
//             <DropDownInput
//               control={form.control}
//               // options={ServicesCategory || []}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "serviceCategory_Id",
//                 title: "لجنة الإشراف",
//                 isRequired: true,
//               }}
//             />
//           </div>
//           <div className="col-md-4 col-12 mt-2 p-2">
//             <DropDownInput
//               control={form.control}
//               // options={ServicesCategory || []}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "serviceCategory_Id",
//                 title: "المشرف الرئيسي",
//                 isRequired: true,
//               }}
//             />
//           </div>
//           <div className="col-md-4 col-12 mt-2 p-2">
//             <DropDownInput
//               control={form.control}
//               // options={ServicesCategory || []}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "serviceCategory_Id",
//                 title: "المشرف الاول",
//                 isRequired: true,
//               }}
//             />
//           </div>

//           <div className="col-md-4 col-12 mt-2 p-2">
//             <DropDownInput
//               control={form.control}
//               // options={ServicesCategory || []}
//               errors={form.formState.errors}
//               field={{
//                 inputName: "serviceCategory_Id",
//                 title: "المشرف الثاني",
//                 isRequired: true,
//               }}
//             />
//           </div>

         
          
          

         
//         </div>
//         <div
//           style={{
//             marginTop: "50px",
            
            
//           }}
//           className="d-flex  w-100 fixedFooter bg-white "
//         >
//           <ActionButton type="submit" className="buttonActionButton btn btn-primary btn-lg me-2">
//             حفظ
//           </ActionButton>
//           <CancelAction
//             className="buttonCancelAction btn btn-secondary btn-lg me-2"
//             onClick={() => {
//               form.reset();
//               onClose();
//             }}
//           >
//             إلغاء
//           </CancelAction>
//         </div>
//       </form>
//     </Sidebar>
//   );
// };

// export default UpsertMessageForm;
