import SectionContainer from "../../components/SectionContainer";
import { SectionHeader } from "../../components/SectionHeader";
import { pastors } from "../../constants";
import PastorCard from "./PastorCard";

export default function Ministers() {
  return (
    <SectionContainer id="ministers">
      <SectionHeader>
        Our <br />
        Leaders
      </SectionHeader>
      <div className="flex flex-col md:grid md:grid-col md:grid-cols-6 lg:grid lg:grid-col lg:grid-cols-6">
        {pastors.map((pastor, index) => (
          <PastorCard pastor={pastor} key={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
