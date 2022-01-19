import SDKSwitch from "../components/SDKSwitch";
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Switch tests",  () => {
  test("Switches render", async () => {
    const { getByTestId } = await render(<SDKSwitch />);
    expect(getByTestId("installedSDKButton")).toHaveTextContent("Installed");
    expect(getByTestId("uninstalledSDKButton")).toHaveTextContent("Uninstalled");
  });
});