export abstract class Collection<TModel> extends Array<TModel> {
	public abstract getModelType(): {new(): TModel};
}