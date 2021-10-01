import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusChecker } from "../StatusChecker";
import Teil from "../Teil";
import { Wrapper } from "./styled";
import { fetchRepositiories, selectError, selectLoading, selectRepositiories } from "../../personalHomepageSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const repos = useSelector(selectRepositiories);

  useEffect(() => {
    dispatch(fetchRepositiories());
  }, [dispatch]);

  return (
    <StatusChecker isError={isError} isLoading={isLoading}>
      <Wrapper>
        {repos.map(project =>
          <Teil
            key={project.id}
            title={project.name.replaceAll('-' , ' ')}
            description={project.description}
            demoLink={project.homepage}
            codeLink={project.html_url}
          />
        )}
      </Wrapper>
    </StatusChecker>
  );
};
export default Projects;