import Image from "next/image";
import { useFadeScroll } from "./useFadeScroll";

function KayFrameWrapper({ t }) {
  useFadeScroll();
  return (
    <div className=" flex flex-col w-[900px]">
      <div
        data-aos="fade-up"
        className="flex gap-10 items-center justify-between mt-25"
      >
        <div className="w-80">
          <h1 className="text-2xl font-extrabold mt-5">
            {t("core-competencies-1")}
          </h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            {t("core-competencies-1-sub-title")}
          </p>
        </div>

        <div className="f">
          <Image
            src="/keyframe-img1.webp"
            alt="Keyframe Image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex gap-10 items-center justify-between mt-25"
      >
        <div className="f">
          <Image
            src="/keyframe-img2.webp"
            alt="Keyframe Image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>

        <div className="w-80">
          <h1 className="text-2xl font-extrabold mt-5">
            {t("core-competencies-2")}
          </h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            {t("core-competencies-2-sub-title")}
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex gap-10 items-center justify-between mt-25"
      >
        <div className="w-80">
          <h1 className="text-2xl font-extrabold mt-5">
            {t("core-competencies-3")}
          </h1>
          <p className="text-gray-600 text-sm tracking-[0.5px] font-light mt-5">
            {t("core-competencies-3-sub-title")}
          </p>
        </div>

        <div className="f">
          <Image
            src="/keyframe-img3.webp"
            alt="Keyframe Image"
            className="rounded"
            width={480}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}

export default KayFrameWrapper;
