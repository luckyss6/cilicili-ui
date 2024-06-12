import { Card, Flex } from "antd";
import { useEffect } from "react";
import { get } from "../http.js";

export default function VideoContent({list , setList}) {
    useEffect(() => {
      get("/video", { page: 1, size: 20 })
        .then((res) => {
          console.log(res);
          setList(res.data)
        })
        .catch((err) => console.log(err));
    }, []);
    

    return (
      <Flex wrap gap="large" justify="center" align="center">
        {list.map((_, index) => {
          return (
            <Card
              style={{ width: 200, height: 200 }}
              key={index}
              cover={<img src="../../src/source/MicrosoftTeams-image.png" />}
            />
          );
        })}
      </Flex>
    ); 
}
