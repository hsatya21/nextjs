const UserProfile = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfile;

export async function getServerSideProps(context) {
  //   console.log(context);
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
}
