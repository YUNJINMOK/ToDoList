const obj = {
    name: "홍길동",
    age: 25,
    married: false,
    family: {
      father: "홍판서",
      mother: "춘섬",
    },
    hobbies: ["독서", "도술"],
    jobs: null,
  };

  const str = JSON.stringify(obj);
  console.log(str)