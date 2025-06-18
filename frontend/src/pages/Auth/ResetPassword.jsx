

function ResetPassword() {
  const { token } = useParams();  // token from URL

  return <div>Token: {token}</div>;
}

export default ResetPassword;
