export class Page {
	_id: string;
	name: string;
	websiteId: string;
	description: string;

	constructor(_id, name, websiteId, description) {
		this._id = _id;
		this.name = name;
		this.websiteId = websiteId;
		this.description = description;
	}
}