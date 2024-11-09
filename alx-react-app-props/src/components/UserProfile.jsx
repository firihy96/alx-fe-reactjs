/* eslint-disable react/prop-types */
// ["useContext", "UserContext"]
export default function UserProfile(props) {
	return (
		<div>
			<h2>{props.name}</h2>
			<p>Age: {props.age}</p>
			<p>Bio: {props.bio}</p>
		</div>
	);
};