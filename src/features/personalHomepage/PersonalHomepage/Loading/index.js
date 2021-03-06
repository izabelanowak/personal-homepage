import { LoadingContainer, LoadingInfo, StyledSpinner } from "./styled";

export const Loading = () => (
  <LoadingContainer>
    <LoadingInfo>
      Please wait, projects are being loadedâ€¦
    </LoadingInfo>
    <StyledSpinner />
  </LoadingContainer>
);
