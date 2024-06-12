import { AutoComplete, Input } from "antd";
import { useState } from "react";
import { get } from "../http";

export default function SearchBar() {
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState([]);

  function search(data) {
    setLoading(true);
    get("/search", { text: data })
      .then((res) => {
        setOptions(() => {
          if (res.data.length === 0) {
            return [];
          }
          return res.data.map((val) => ({
            label: val,
            value: val,
          }));
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <AutoComplete
      style={{ width: "30%", margin: 'auto' }}
      popupMatchSelectWidth={252}
      options={options}
      // onChange={search}
      onSearch={search}
      size="large"
    >
      <Input.Search
        size="large"
        placeholder="input here"
        enterButton
        loading={loading}
      />
    </AutoComplete>
  );
}
