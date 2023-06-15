function ProfileCard({ srcImage, name }) {
  return (
    <div className="max-w-[250px]">
      <img
        className="filter grayscale aspect-square w-full"
        src={srcImage.large}
        alt=""
      />
      <p className="text-lg">{`${name.first} ${name.last}`}</p>
    </div>
  );
}

export default ProfileCard;
