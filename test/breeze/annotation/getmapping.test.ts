import ResponseType from "../../../src/breeze/utilities/response-type";
import Resource from "../../../src/breeze/utilities/resource";
import Getmapping from "../../../src/breeze/annotation/getmapping";

describe('Getmapping', async () => {

  it('registers an getmapping', async () => {

    const resource = Getmapping('asdasd', ResponseType.JSON)();
    async function hello() {
      return {hello: "world"};
    }

    expect(resource).toBeInstanceOf(Resource);
    expect(resource.getTargetMethodName()).toBe("hello")


  });

});
