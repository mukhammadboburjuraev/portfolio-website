import Info from "./Info";

function Education({ t }) {
  return (
    <div className="w-screen flex flex-col justify-center items-center py-30">
      <div data-aos="fade-up">
        <h1 className="text-center font-bold text-4xl">{t("education")} </h1>

        <div className="flex flex-col items-center justify-between mt-15 gap-10">
          <div className="flex justify-between items-start w-[820px] mx-auto">
            <p className="text-gray-600">* 2022 - 2024</p>
            <p className="font-bold text-xl">{t("university-1")}</p>
            <div className="text-gray-600 w-[450px]">
              <p>{t("university-1-sub-title")}</p>
              {t("university-1-desc")}
            </div>
          </div>

          <div className="flex justify-between items-start w-[820px] mx-auto">
            <p className="text-gray-600">* 2024</p>
            <p className="font-bold text-xl">{t("university-2")} </p>
            <div className="text-gray-600 w-[450px]">
              {t("university-2-sub-title")}
              <p>{t("university-2-desc")}</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 border-[0.5px] mt-10 w-[820px]" />

        <div className="flex justify-between items-start w-[820px] mx-auto mt-10">
          <p className="text-gray-600">* 2023</p>
          <p className="font-bold text-xl">{t("certificate-1")}</p>
          <div className="text-gray-600 w-[450px]">
            <p>{t("certificate-1-sub-title")}</p>
          </div>
        </div>

        <div className="flex justify-between items-start w-[820px] mx-auto mt-10">
          <p className="text-gray-600">* 2024</p>
          <p className="font-bold text-xl">{t("certificate-2")}</p>
          <div className="text-gray-600 w-[450px]">
            <p>{t("certificate-2-sub-title")}</p>
          </div>
        </div>

        <div className="flex justify-between items-start w-[820px] mx-auto mt-10">
          <p className="text-gray-600">* 2024</p>
          <p className="font-bold text-xl">{t("certificate-3")}</p>
          <div className="text-gray-600 w-[450px]">
            <p>{t("certificate-3-sub-title")}</p>
          </div>
        </div>

        <Info t={t} />
      </div>
    </div>
  );
}

export default Education;
