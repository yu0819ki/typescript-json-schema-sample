class App {
  /**
   * @minimum 1
   */
  public id: integer;

  /**
   * @minLength 1
   * @maxLength 255
   */
  public name: string;

  /**
   * @minLength 0
   * @maxLength 65535
   */
  public description: string;
  public osType: OSType;

  /**
   * @minimum -1.0
   * @maximum 1.0
   */
  public score: float;
  public deleted: boolean;
  public createdAt: date;
  public updatedAt: date;
}
export default App;
