import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { getCapsulesData } from "../redux/appReducer/action";
import { nanoid } from 'nanoid'

const HomePage = () => {
  const dispatch = useDispatch()
  const capsules = useSelector((store)=>store.AppReducer.capsules)

  console.log(capsules);
  useEffect(()=>{
   dispatch(getCapsulesData())
  },[])

  
  return (
    <div>
      <Banner />
      <div style = {{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
        {capsules.length > 0 && capsules.map((capsule)=>{
          return <Card key = {nanoid()} capsule = {capsule}/>
        })}
      </div>
    </div>
  );
};

export default HomePage;
