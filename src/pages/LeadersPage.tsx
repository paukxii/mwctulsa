import { Outlet, NavLink, useParams } from "react-router-dom";
import { pastors } from "../constants";

function LeadersPage() {
    const { leaderId } = useParams();
  
    const selectedPastor = pastors.find((pastor) => pastor.name === leaderId);
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      <Outlet />
      <div className="sticky mx-auto bottom-2 max-w-max bg-slate-400/25 backdrop-blur-sm rounded-full my-10 p-2 ">
        <nav className="flex justify-center" aria-label="Tabs" role="tablist">
          {pastors.map((pastor, index) => (
            <NavLink to={`${pastor.name}`} key={index}>
              <img
                src={pastor.thumbnail_img}
                alt={pastor.name}
                className={`h-20 w-20 sm:h-14 sm:w-14 object-cover rounded-full drop-shadow-xl ${pastor.name === selectedPastor?.name ? 'border-4 border-yellow-500' : ''}`}
              />
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default LeadersPage;
