import { useLoaderData, Form } from "react-router-dom"

function Show(props) {
	const cheese = useLoaderData()

	return (
		<div className="cheeses">
			<h1>{cheese.name}</h1>
			<h2>{cheese.countryOfOrigin}</h2>
			<img src={cheese.image} alt={cheese.name} />

			<h2>Update {cheese.name}</h2>
			<Form action={`/update/${cheese._id}`} method="post">
				<input type="input" name="name" placeholder="Cheese Name" />
				<input type="input" name="image" placeholder="Cheese Image" />
				<input
					type="input"
					name="countryOfOrigin"
					placeholder="Cheese Country of Origin"
				/>
				<input type="submit" value={`Update ${cheese.name}`} />
			</Form>

			<h2>Delete Cheese</h2>
			<Form action={`/delete/${cheese._id}`} method="post">
				<input type="submit" value={`Delete ${cheese.name}`} />
			</Form>
		</div>
	)
}

export default Show
