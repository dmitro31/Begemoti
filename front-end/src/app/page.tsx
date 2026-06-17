import  BlobBackground  from "@/widgets/Home/Background";
import Locations from "@/widgets/Location";
import Photo from "@/widgets/Photo";
import Popular from "@/widgets/Popular";

export default function Home(){

  return(
    <div>
      <BlobBackground/>
      <Popular/>
      <Photo/>
      <Locations/>
    </div>
  )
}