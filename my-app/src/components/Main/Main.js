import "./Main.css"

function Main(){
	return (
		<div>

			<div className="main_center">
				<h2 className="title">Click option</h2>
				<div>
					<a className="button_option" href="/searchgifs" onClick={(e)=>console.log("HIIIIII")}>Search Gifs</a>
					<a className="button_option" href="/secretsanta" onClick={(e)=>console.log("Byeeeee")}>Secret  Santa</a>
					<a className="button_option" href="/workspace" onClick={(e)=>console.log("hiiii")}>Workspace</a>
				</div>
			</div>
		</div>
	)
}

export default Main;