import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pageLoaded } from "../application/actions/ui";
import { getLoading } from "../application/selectors/ui";

const Loading = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  useEffect(() => {
    dispatch(pageLoaded);
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <div className="dtr-preloader d-none">
          <div className="dtr-preloader-inner">
            <div className="dtr-loader">Loading...</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Loading;
