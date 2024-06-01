import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";

export const Input = ({
  id,
  label,
  type,
  placeholder,
  title,
  reactHookForm,
  className,
  errors,
  ...rest
}) => {
  return (
    <div className=" flex-1">
      <label htmlFor={title} className=" text-gray-300">
        {label}
      </label>
      <input
        type={type}
        {...rest}
        id={id}
        {...reactHookForm}
        placeholder={placeholder}
        className={className}
      />

      {errors && <p className=" text-rose-500">{errors.message}</p>}
    </div>
  );
};

export const Select = ({
  label,
  id,
  options,
  placeholder,
  reactHookForm,
  className,
  errors,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={id} className="text-gray-300">
        {label}
      </label>
      <select
        id={id}
        className={className}
        placeholder={placeholder}
        {...reactHookForm}
        {...rest}
      >
        <option value="">{placeholder}</option>
        {options.map((option, idx) => (
          <option key={idx} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {errors && <p className="text-rose-500">{errors.message}</p>}
    </div>
  );
};

export const TextArea = ({
  id,
  label,
  placeholder,
  title,
  reactHookForm,
  className,
  errors,
  ...rest
}) => {
  return (
    <div className="flex-1">
      <label htmlFor={title} className="text-gray-300">
        {label}
      </label>
      <textarea
        {...rest}
        id={id}
        {...reactHookForm}
        placeholder={placeholder}
        className={className}
      />
      {errors && <p className="text-rose-500">{errors.message}</p>}
    </div>
  );
};

export const MarkDownEditor = ({
  id,
  label,
  placeholder,
  title,
  reactHookForm,
  errors,
  reset,
}) => {
  const [active, setActive] = useState("write");
  const [editorState, setEditorState] = useState("");

  useEffect(() => {
    setEditorState("");
    setActive("write");
  }, [reset]);

  return (
    <div>
      <label htmlFor={title} className="text-gray-300">
        {label}
      </label>
      <span className="text-rose-500 text-xl">*</span>
      <div className="w-full border-2 border-gray-800 bg-gray-950 my-3 rounded-2xl">
        <div className="pl-4 pt-2.5">
          <button
            type="none"
            name="write"
            onClick={(e) => {
              e.preventDefault();
              setActive(e.target.name);
            }}
            className={`px-6 py-2 text-white -mb-[1px] ${
              active === "write" &&
              "border rounded-t-xl text-white border-gray-800 bg-black  border-b-black"
            }`}
          >
            Edit
          </button>
          <button
            type="none"
            name="preview"
            onClick={(e) => {
              e.preventDefault();
              setActive(e.target.name);
            }}
            className={`px-6 py-2 text-white -mb-[1px] ${
              active === "preview" &&
              "border rounded-t-xl  border-gray-800 bg-black  border-b-black"
            }`}
          >
            Preview
          </button>
        </div>
        <div className="p-2.5 pb-0 border-t text-white border-gray-800">
          {active === "write" ? (
            <textarea
              {...reactHookForm}
              id={id}
              onChange={(e) => {
                setEditorState(e.target.value);
              }}
              className="w-full border text-gray-300 border-gray-800 rounded-lg lg:min-h-[24rem] md:min-h-[24rem] min-h-[35rem] outline-none p-2 bg-gray-950"
              name={title}
              placeholder={placeholder}
            ></textarea>
          ) : (
            <div className="unreset px-2 min-h-[5rem] border text-white border-gray-800 rounded-md">
              <ReactMarkdown
                // children={editorState}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        // children={String(children).replace(/\n$/, "")}
                        style={stackoverflowDark}
                        language={match[1]}
                        PreTag="div"
                      >{String(children).replace(/\n$/, "")}</SyntaxHighlighter>
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    );
                  },
                }}
                remarkPlugins={[
                  remarkGfm,
                  remarkRehype,
                  rehypeStringify,
                  rehypeRaw,
                ]}
              >{editorState}</ReactMarkdown>
            </div>
          )}
        </div>
        <div className="pl-2.5 text-sm text-sky-600 pb-2 font-medium">
          MarkDown Supported
        </div>
      </div>
      {errors && <p className="text-rose-500">{errors.message}</p>}
    </div>
  );
};

export const MultiSelect = ({ allItems, setAllItems, type = "text", placeholder = "Add an item", fullWd = false, resetItems, value = [] }) => {
    const [items, setItems] = useState(value);
    const [current, setCurrent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (current !== '') {
            let item = current;
            item = item.replace("#", "").trim();
            setItems([item, ...items]);
            setAllItems([item, ...allItems]);
        };
        setCurrent('');
    }

    useEffect(() => {
        setItems(value);
    }, [resetItems]);

    return (
        <div className='flex flex-col gap-2 pt-2 w-full'>
            <div className={`flex gap-3 ${fullWd ? "w-full" : "w-fit"}`}>
                <input value={current} onChange={(e) => setCurrent(e.target.value)} className="w-full bg-gray-950 text-gray-300 px-4 py-1.5 rounded-lg" type={type} placeholder={placeholder} />
                <button onClick={handleSubmit} className="bg-sky-500 px-5 rounded-xl">
                    Add
                </button>
            </div>
            {items.length > 0 && <div className="flex flex-col">
                <p>
                    added items:
                </p>
                <ul>
                    {items.map((item, idx) => (
                        <div key={idx} className="flex text-lg gap-5">
                            <li className="text-sky-500">{item}</li>
                            <button onClick={(e) => {
                                e.preventDefault();
                                setItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
                                let newItems = allItems.filter((prevItem) => prevItem !== item);
                                setAllItems(newItems);
                            }}>
                                <MdDeleteForever className="text-red-500" />
                            </button>
                        </div>
                    ))}
                </ul>
            </div>}

        </div>
    );
}