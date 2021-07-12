import { ChangeEvent, useState } from "react";

type pnrDataType = {
  pnr: string;
};

const Convert = () => {
  const [convertString, setconvertString] = useState<string>("");
  const [pnrData, setPnrData] = useState<pnrDataType[]>([]);

  const handleClickConvert = () => {
    // console.log(convertString);

    var convertArr = convertString.split("\n");

    // console.log(convertArr);

    var convertData: pnrDataType = {
      pnr: convertArr[0],
    };

    setPnrData([...pnrData, convertData]);

    // console.log(pnrData);
  };

  const handleConvertChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setconvertString(e.target.value);
  };

  return (
    <div className="">
      <main className="container mx-auto mt-5">
        <h1 className="text-xl font-bold mb-5">Convert</h1>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <div className="w-full">
              <label className="block mb-3 font-bold" htmlFor="source">
                Source
              </label>
              <textarea
                className="border rounded w-full mb-3"
                rows={20}
                name="source"
                id="source"
                placeholder="Input"
                value={convertString}
                onChange={handleConvertChange}
              ></textarea>
              <button
                className="border bg-blue-500 hover:bg-blue-700 rounded p-3 text-white"
                onClick={handleClickConvert}
              >
                Convert
              </button>
            </div>
          </div>
          <div>
            <div className="w-full">
              <table className="table-fixed w-full border-collapse border-2 border-black">
                <thead>
                  <tr className="">
                    <th className="p-2 border-2 border-black">Name</th>
                    <th className="p-2 border-2 border-black">Ticket Number</th>
                  </tr>
                </thead>
                <tbody>
                  {pnrData &&
                    pnrData.map((item: pnrDataType) => (
                      <tr key={item.pnr}>
                        <td className="p-2 border-2 border-black">
                          {item.pnr}
                        </td>
                        <td className="p-2 border-2 border-black"></td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Convert;
