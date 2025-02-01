import clsx from "clsx";

type props = {
  pageTitle: string;
};
const PageTitle: React.FC<props> = ({ pageTitle }) => {
  return (
    <div
      id="kt_page_title"
      data-kt-swapper="true"
      data-kt-swapper-mode="prepend"
      data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
      className={clsx("page-title d-flex justify-content-end flex-wrap me-3  w-100")}
    >
      <h1
        className={clsx("page-heading d-flex text-gray-900 fw-bold fs-2 my-0 border-b-1")}
      >
        {pageTitle}
      </h1>
    </div>
  );
};

export { PageTitle };
