import { useState, useEffect } from "react";
import { Button, Input, Table } from "antd";
import {
  PlusOutlined,
  CloseOutlined,
  CheckOutlined,
  EditOutlined,
} from "@ant-design/icons";
import Navbar from "../Navbar/NavBar";

export default function FormCreator() {
  const [headerText, setHeaderText] = useState("");
  const [footerText, setFooterText] = useState("");
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [headerFields, setHeaderFields] = useState([]);
  const [footerFields, setFooterFields] = useState([]);

  const [tableData, setTableData] = useState(
    Array.from({ length: tableRows }, () =>
      Array.from({ length: tableCols }, () => "")
    )
  );

  const [tableHeaderText, setTableHeaderText] = useState(
    Array.from({ length: tableCols }, () => ({ value: "", isText: false }))
  );

  const [tableCells, setTableCells] = useState(
    Array.from({ length: tableRows }, () =>
      Array.from({ length: tableCols }, () => [])
    )
  );

  useEffect(() => {
    setTableCells(
      Array.from({ length: tableRows }, () =>
        Array.from({ length: tableCols }, () => [])
      )
    );
  }, [tableRows, tableCols]);

  useEffect(() => {
    setTableHeaderText(
      Array.from({ length: tableCols }, () => ({ value: "", isText: false }))
    );
  }, [tableCols]);

  useEffect(() => {
    setTableData(
      Array.from({ length: tableRows }, () =>
        Array.from({ length: tableCols }, () => "")
      )
    );
  }, [tableRows, tableCols]);

  const handleTableHeaderChange = (index, value) => {
    const newHeaderText = [...tableHeaderText];
    newHeaderText[index].value = value;
    setTableHeaderText(newHeaderText);
  };

  const setHeaderToText = (index) => {
    const newHeaderText = [...tableHeaderText];
    newHeaderText[index].isText = true;
    setTableHeaderText(newHeaderText);
  };

  const handleFooterChange = (e) => {
    setFooterText(e.target.value);
  };

  const handleTableCellChange = (row, col, index, value, label) => {
    const newTableCells = [...tableCells];
    const newCellFields = [...newTableCells[row][col]];
    newCellFields[index] = { value, label, isText: false };
    newTableCells[row][col] = newCellFields;
    setTableCells(newTableCells);
  };

  const addFormField = (type, section) => {
    if (section === "header") {
      setHeaderFields([
        ...headerFields,
        { type, value: "", label: "", isText: false },
      ]);
    } else if (section === "footer") {
      setFooterFields([
        ...footerFields,
        { type, value: "", label: "", isText: false },
      ]);
    }
  };

  const handleFormFieldChange = (section, index, value, label) => {
    if (section === "header") {
      const newFields = [...headerFields];
      newFields[index].value = value;
      newFields[index].label = label;
      setHeaderFields(newFields);
    } else if (section === "footer") {
      const newFields = [...footerFields];
      newFields[index].value = value;
      newFields[index].label = label;
      setFooterFields(newFields);
    }
  };

  const setInputFieldAsText = (section, index) => {
    if (section === "header") {
      const newFields = [...headerFields];
      newFields[index].isText = true;
      setHeaderFields(newFields);
    } else if (section === "footer") {
      const newFields = [...footerFields];
      newFields[index].isText = true;
      setFooterFields(newFields);
    }
  };

  const removeFormField = (section, index) => {
    if (section === "header") {
      const newFields = [...headerFields];
      newFields.splice(index, 1);
      setHeaderFields(newFields);
    } else if (section === "footer") {
      const newFields = [...footerFields];
      newFields.splice(index, 1);
      setFooterFields(newFields);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-gray-900 text-lg p-4 w-64">
        <div className="grid text-center py-4">
          <h3 className="text-2xl text-white font-bold mb-2">Header</h3>
          <div className="grid justify-evenly">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => addFormField("input", "header")}
              className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Input Field
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => addFormField("text", "header")}
              className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Text Field
            </Button>
          </div>
        </div>
        <hr className="" />
        <div className="mb-4 text-center py-2">
          <h3 className="text-2xl text-white font-bold mb-2">Table</h3>
          <div className="flex items-center justify-center mb-6">
            <div className="grid justify-center space-y-2">
              <span className="mr-2 text-white">Rows</span>
              <Input
                type="number"
                value={tableRows}
                onChange={(e) => setTableRows(parseInt(e.target.value))}
                className="w-16 mr-3"
              />
            </div>
            <div className="grid justify-center space-y-2">
              <span className="mr-2 text-white">Columns</span>
              <Input
                type="number"
                value={tableCols}
                onChange={(e) => setTableCols(parseInt(e.target.value))}
                className="w-16 mr-3"
              />
            </div>
          </div>
          <div className="grid justify-evenly">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setTableRows(tableRows + 1);
              }}
              className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Row
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => {
                setTableCols(tableCols + 1);
              }}
              className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Column
            </Button>
          </div>
        </div>
        <hr className="" />
        <div className="mb-4 text-center py-1">
          <h3 className="text-2xl text-white font-bold mb-2">Footer</h3>
          <div className="grid justify-evenly">
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => addFormField("input", "footer")}
              className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Input Field
            </Button>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => addFormField("text", "footer")}
              className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Add Text Field
            </Button>
          </div>
        </div>
        <hr className="" />
        <div className="mb-4 text-center py-0">
          <h3 className="text-xl text-white font-bold mb-2">Saving</h3>
          <input
            className="rounded-md px-1 py-1"
            placeholder="Name of File"
          ></input>
          <div className="flex justify-evenly py-2">
            <Button className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Save
            </Button>
            <Button className="mb-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Cancel
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 px-12 py-6">
        <div className="mb-4">
          <Navbar></Navbar>
          <br></br>
          <div className="flex flex-wrap">
            {headerFields.map((field, index) => (
              <div key={index} className="flex items-center mr-4 mb-2">
                {field.type === "input" && !field.isText && (
                  <Input
                    value={field.value}
                    onChange={(e) =>
                      handleFormFieldChange("header", index, e.target.value, "")
                    }
                    className="w-48"
                  />
                )}
                {field.type === "input" && field.isText && (
                  <span>{field.value}</span>
                )}
                {field.type === "text" && (
                  <div className="flex items-center">
                    <Input
                      value={field.label}
                      onChange={(e) =>
                        handleFormFieldChange(
                          "header",
                          index,
                          field.value,
                          e.target.value
                        )
                      }
                      className="w-48 mr-2"
                    />
                    <span>{field.value}</span>
                  </div>
                )}
                {field.type === "input" && !field.isText && (
                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={() => setInputFieldAsText("header", index)}
                    className="ml-2 text-white rounded-lg bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  ></Button>
                )}
                <Button
                  type="primary"
                  icon={<CloseOutlined />}
                  onClick={() => removeFormField("header", index)}
                  className="ml-2 text-white rounded-lg bg-red-400 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                ></Button>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-x auto mb-4">
          <div className="w-fit">
            <Table
              bordered
              dataSource={tableData.map((rowData, rowIndex) =>
                rowData.map((value, colIndex) => ({
                  key: `${rowIndex}-${colIndex}`,
                  value: value,
                }))
              )}
              pagination={false}
              scroll={{ x: true }}
              columns={Array.from({ length: tableCols }, (_, index) => ({
                title: (
                  <div className="flex items-center">
                    {tableHeaderText[index]?.isText ? (
                      <span>{tableHeaderText[index].value}</span>
                    ) : (
                      <Input
                        value={tableHeaderText[index]?.value || ""}
                        onChange={(e) =>
                          handleTableHeaderChange(index, e.target.value)
                        }
                        className="w-32 mr-2"
                      />
                    )}
                    {!tableHeaderText[index]?.isText && (
                      <Button
                        type="primary"
                        icon={<CheckOutlined />}
                        onClick={() => setHeaderToText(index)}
                        className="ml-2 text-white rounded-lg bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      ></Button>
                    )}
                  </div>
                ),
                dataIndex: `value`,
                key: `column-${index}`,
                render: (value, record, rowIndex, colIndex) => (
                  <div className="flex items-center">
                    {tableCells[rowIndex][colIndex]?.isText ? (
                      <span>{value}</span>
                    ) : (
                      <Input
                        value={value}
                        onChange={(e) =>
                          handleTableCellChange(
                            rowIndex,
                            colIndex,
                            e.target.value
                          )
                        }
                        className="w-48 mr-2"
                      />
                    )}
                    <Button
                      type="primary"
                      icon={<CheckOutlined />}
                      className="ml-2"
                    >
                      {tableCells[rowIndex][colIndex]?.isText
                        ? "Edit"
                        : "Set as Text"}
                    </Button>
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      className="ml-2"
                    >
                      Input
                    </Button>
                  </div>
                ),
              }))}
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap">
            {footerFields.map((field, index) => (
              <div key={index} className="flex items-center mr-4 mb-2">
                {field.type === "input" && !field.isText && (
                  <Input
                    value={field.value}
                    onChange={(e) =>
                      handleFormFieldChange("footer", index, e.target.value, "")
                    }
                    className="w-48"
                  />
                )}
                {field.type === "input" && field.isText && (
                  <span>{field.value}</span>
                )}
                {field.type === "text" && (
                  <div className="flex items-center">
                    <Input
                      value={field.label}
                      onChange={(e) =>
                        handleFormFieldChange(
                          "footer",
                          index,
                          field.value,
                          e.target.value
                        )
                      }
                      className="w-48 mr-2"
                    />
                    <span>{field.value}</span>
                  </div>
                )}
                {field.type === "input" && !field.isText && (
                  <Button
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={() => setInputFieldAsText("footer", index)}
                    className="ml-2 text-white rounded-lg bg-green-400 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  ></Button>
                )}
                <Button
                  type="primary"
                  icon={<CloseOutlined />}
                  onClick={() => removeFormField("footer", index)}
                  className="ml-2 text-white rounded-lg bg-red-400 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                ></Button>
              </div>
            ))}
          </div>
          <div className="flex items-center mb-2">
            <Input
              placeholder="Remark"
              value={footerText}
              onChange={handleFooterChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
