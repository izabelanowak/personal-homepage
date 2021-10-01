import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusChecker } from "../StatusChecker";
import Teil from "../Teil";
import { Wrapper } from "./styled";
import { fetchRepositories, selectError, selectLoading, selectRepositories } from "../../personalHomepageSlice";
import { username } from "../personalData";

const Projects = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const repositories = useSelector(selectRepositories);

  useEffect(() => {
    dispatch(fetchRepositories(username));
  }, [dispatch]);

  return (
    <StatusChecker isError={isError} isLoading={isLoading}>
      <Wrapper>
        {repositories.map(project =>
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