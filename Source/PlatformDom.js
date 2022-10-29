
class PlatformDom
{
	constructor(divRootId)
	{
		this.divRootId = divRootId;
	}

	initialize()
	{
		var d = document;
		this.divRoot =
			d.getElementById(this.divRootId);
	}

	domElementAdd(domElementToAdd)
	{
		this.divRoot.appendChild(domElementToAdd);
	}
}
