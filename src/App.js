import React from "react";

let Products = () => {
  let data = [
    {
      image:
        "https://media.istockphoto.com/id/1388648617/photo/confident-caucasian-young-man-in-casual-denim-clothes-with-arms-crossed-looking-at-camera.jpg?s=612x612&w=0&k=20&c=YxctPklAOJMmy6Tolyvn45rJL3puk5RlKt39FO46ZeA=",
      id:"1",
        name: "Alex C",
      age: 2,
      city: "Houston",
    },
    {
      image:
        "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=",
      id:"2",
        name: "John G",
      age: 40,
      city: "Washington",
    },
    {
      image:
        "https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38=",
      id:"3",
        name: "Bala T",
      age: 22,
      city: "Bangalore",
    },
  ];

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" width={"400px"} />
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
          <h2>{item.city}</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
