/**
 * いわゆるLimit/Offsetページングっぽいプロパティセット
 */
abstract class Paging {
  /**
   * @default 0
   * @minimum 0
   */
  public offset: integer;

  /**
   * @default 20
   * @minimum 0
   * @maximum 500
   */
  public size: integer;

  /**
   * @default 1
   * @minimum 1
   */
  public page: integer;

  /**
   * @minimum 0
   */
  public total?: integer;
}

export default Paging;
