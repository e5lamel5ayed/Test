/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Sidebar } from "primereact/sidebar";
import { useMutation } from "@tanstack/react-query";
import Input from "../../../Shared/input";
import ActionButton from "../../../Shared/actionButton";
import CancelAction from "../../../Shared/cancelAction";
import DropDownInput from "../../../Shared/DropDownInput";
import { Calendar } from "primereact/calendar";
import HomeIcon from "@mui/icons-material/Home";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import { Student } from "../../../interfaces/_studentModels";
import { AddStudent, useListOfDegrees, useListOfDepartment, useListOfQualificationType, useListOfSpecialization, useListOfSupervisors } from "../../../Apis/studentApis";


type Props = {
  open: boolean;
  // initialValues: Istudent;
  mode: "add" | "edit";
  onClose: () => void;
};

const UpsertStudentForm = ({
  open,
  // initialValues,
  mode,
  onClose
}: Props) => {
  const form = useForm<Student>({
    criteriaMode: "all",
    mode: "onChange",
  });

  const { data: listOfSupervisors } = useListOfSupervisors();
  const { data: listOfQualificationType } = useListOfQualificationType();
  const { data: listOfDepartment } = useListOfDepartment();
  const { data: listOfSpecialization } = useListOfSpecialization();
  const { data: listOfDegrees } = useListOfDegrees();

  // useEffect(() => {
  //   if (initialValues) {
  //     form.reset({
  //       ...initialValues,
  //     });
  //   }
  // }, [initialValues, mode]);

  // const { mutate: upsertStudentMutation } = useMutation({
  //   mutationFn: (data: Student) => {
  //     // Replace with actual API call
  //     return Promise.resolve();
  //   },
  //   onSuccess: () => {
  //     toast.success(
  //       mode === "edit"
  //         ? "تم تحديث بيانات الطالب بنجاح!"
  //         : "تم إضافة الطالب بنجاح!"
  //     );
  //     onClose();
  //   },
  //   onError: () => {
  //     toast.error(
  //       mode === "edit" ? "فشل في تحديث بيانات الطالب." : "فشل في إضافة الطالب."
  //     );
  //   },
  // });

  const { mutate: upsertStudentMutation } = useMutation({
    mutationFn: (req: Student) => AddStudent(req),
    onSuccess: async () => {
      onClose();
      toast.success('Student Added successfully!');
    },

    onError: () => {
      toast.error('Failed to Add Student.');
    },
  });
  const onSubmit = (values: Student) => {
    upsertStudentMutation(values);
  };

  const customHeader = (
    <div className="flex align-items-center gap-2">
      <span className="font-bold fs-1">
        {mode === "edit" ? "Edit Student" : "إضافة طالب جديد"}
      </span>
    </div>
  );

  return (
    <Sidebar
      position="left"
      visible={open}
      style={{ width: "70vw" }}
      modal
      onHide={() => {
        form.reset();
        onClose();
      }}
      header={customHeader}
      dismissable={false}
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
          className="d-flex flex-row flex-wrap mt-3"
          style={{ direction: "rtl" }}
        >
          <div className="col-md-12 col-12 mt-3">
            <div
              className="my-2 p-1 d-flex gap-2 rounded-2 align-items-center mb-4"
              style={{ margin: "0 -8px", backgroundColor: "#F1F1F4 " }}
            >
              <HomeIcon sx={{ color: '#000' }} />
              <h5 className="mt-0 mt-2 ">بيانات الطالب الاساسية</h5>
            </div>
          </div>
          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "fullName",
                title: "اسم الطالب",
                maxLength: 100,
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "nationalId",
                title: "الرقم القومي",
                maxLength: 14,
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "email",
                title: "البريد الإلكتروني",
                maxLength: 100,
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "placeOfBirth",
                title: "محل الميلاد",
                maxLength: 100,
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 col-12 mt-1 p-2">
            <label
              className="form-label"
              style={{ color: "rgb(0, 0, 0)" }}
              htmlFor="joinDate"
            >
              تاريخ الميلاد
            </label>
            <Controller
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <Calendar
                  style={{ direction: "ltr" }}
                  showIcon
                  // placeholder='تاريخ الميلاد'
                  onChange={(e) => field.onChange(e.value || new Date())}
                  value={field.value}
                  className="w-100"
                />
              )}
            />
          </div>

          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "address",
                title: "العنوان",
                maxLength: 200,
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-12 col-12 mt-3">
            <div
              className="my-2 p-1  d-flex gap-2 rounded-2 align-items-center mb-4"
              style={{ margin: "0 -8px", backgroundColor: "#F1F1F4 " }}
            >
              <i className="ki-solid ki-some-files  text-gray-600 fs-1" />
              <CastForEducationOutlinedIcon sx={{ color: '#000' }} />
              <h5 className="mt-0 mt-2">بيانات المؤهل</h5>
            </div>
          </div>
          <div className="col-md-4 col-12 mt-2 p-2">
            <DropDownInput
              control={form.control}
              options={listOfQualificationType || []}
              errors={form.formState.errors}
              field={{
                inputName: "qualificationTypeId",
                title: "المؤهل",
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "graduationYear",
                title: "عام التخرج",
                // type: "number",
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 col-12 mt-2 p-2">
            <DropDownInput
              control={form.control}
              options={listOfDepartment || []}
              errors={form.formState.errors}
              field={{
                inputName: "departmentId",
                title: "القسم",
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 col-12 mt-2 p-2">
            <DropDownInput
              control={form.control}
              options={listOfSpecialization || []}
              errors={form.formState.errors}
              field={{
                inputName: "specializationId",
                title: "التخصص",
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "totalDegrees",
                title: "المجموع",
                maxLength: 50,
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 col-12 mt-2 p-2">
            <DropDownInput
              control={form.control}
              options={listOfDegrees || []}
              errors={form.formState.errors}
              field={{
                inputName: "degreeId",
                title: "الدرجه العلميه",
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-12 col-12 mt-3">
            <div
              className="my-2 p-1 d-flex gap-2 rounded-2 align-items-center mb-4"
              style={{ margin: "0 -8px", backgroundColor: "#F1F1F4 " }}
            >
              <i className="ki-solid ki-some-files  text-gray-600 fs-1" />
              <AppRegistrationOutlinedIcon sx={{ color: '#000' }} />
              <h5 className="mt-0 mt-2 ">بيانات القيد</h5>
            </div>
          </div>
          <div className="col-md-4 mt-2 p-2">
            <Input
              register={form.register}
              errors={form.formState.errors}
              field={{
                inputName: "enrolledDegree",
                title: "الدرجة المقيد عليها",
                maxLength: 50,
                isRequired: true,
              }}
            />
          </div>
          <div className="col-md-4 col-12 mt-1 p-2">
            <label
              className="form-label"
              style={{ color: "rgb(75, 85, 99)" }}
              htmlFor="joinDate"
            >
              تاريخ القيد
            </label>
            <Controller
              control={form.control}
              name="enrollmentDate"
              render={({ field }) => (
                <Calendar
                  showIcon
                  style={{ direction: "ltr" }}
                  placeholder=" "
                  onChange={(e) => field.onChange(e.value || new Date())}
                  value={field.value || null}
                  className="w-100"
                />
              )}
            />
          </div>

          <div className="col-md-4 col-12 mt-2 p-2">
            <DropDownInput
              control={form.control}
              options={listOfSupervisors || []}
              errors={form.formState.errors}
              field={{
                inputName: "academicGuideId",
                title: "المرشد الاكاديمي",
                isRequired: true,
              }}
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "50px",
          }}
          className="d-flex  w-100 fixedFooter bg-white "
        >
          <ActionButton type="submit" className="buttonActionButton btn btn-primary btn-lg me-2">
            حفظ
          </ActionButton>
          <CancelAction
            className="buttonCancelAction btn btn-secondary btn-lg me-2"
            onClick={() => {
              form.reset();
              onClose();
            }}
          >
            إلغاء
          </CancelAction>
        </div>
      </form>
    </Sidebar>
  );
};

export default UpsertStudentForm;
