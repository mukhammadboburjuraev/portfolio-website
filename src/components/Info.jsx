function Info({ t }) {
  return (
    <div className="flex flex-col justify-center items-center mx-auto mt-45">
      <h1 className="font-bold text-4xl text-center w-[350px] leading-11">
        {t("info-1")} <br />
        {t("info-2")}
      </h1>

      <div className="flex flex-col px-8 py-8 rounded-xl bg-gray-600/30 mt-10 gap-y-3 text-base">
        <p className="font-bold">
          {t("phone")}
          <span className="font-light ml-5">010 8414 5758</span>
        </p>

        <p className="font-bold">
          {t("email")}
          <span className="font-light ml-10">
            mukhammadboburjuraev.@gmail.com
          </span>
        </p>

        <p className="font-bold">
          linkedIn
          <span className="font-light ml-5">@juraevmukhammadbobur</span>
        </p>
      </div>
    </div>
  );
}

export default Info;
