import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/");
    }, 1000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return <div></div>;
};

export default NotFound;
