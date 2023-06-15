import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getPhoto() {
      const response = await fetch("https://randomuser.me/api/?results=16");
      const json = await response.json();
      setData(json.results);
    }

    getPhoto();
  }, []);

  const profile = data ? (
    data.map((data, index) => {
      return (
        <ProfileCard key={index} srcImage={data.picture} name={data.name} />
      );
    })
  ) : (
    <p>Loading...</p>
  );

  console.log(data);

  return (
    <div>
      <div className="mx-auto max-w-[1140px] px-6">
        <p className="max-w-2xl tracking-wide leading-7">
          <b>ARCHITECTURE FIRM</b> is a collaboration of architects and
          designers in Brooklyn, New York and Richmond, Virginia, led by Danny
          MacNelly, Katie MacNelly, and Adam Ruffin, specialized in hospitality,
          residential, and contemporary art spaces. We strive to create
          architecture that is simple, beautiful, and economical of both means
          and gestures.
        </p>
        <br />
        <p className="max-w-2xl tracking-wide leading-7">
          We believe that architecture should be integral with its place and
          that the best buildings allow people to fully experience the light and
          nature of that place. Our chief pursuit is a timeless expression of
          building that is appropriate to its users and their purpose, that
          blends progressive technology with elemental form.
        </p>
      </div>
      <div className="mx-auto max-w-[1140px] px-6 mt-8">
        <p className="mb-4">
          <b>Team</b>
        </p>
        <div className="grid grid-cols-2 gap-8 justify-between sm:grid-cols-4 sm:gap-12">
          {profile}
        </div>
      </div>
    </div>
  );
}

export default About;
