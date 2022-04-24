import { Nav } from 'react-bootstrap';
import {
  BsCalendar3,
  BsFillPeopleFill,
  BsHouseDoorFill,
} from 'react-icons/bs';

export default function NavLeftComponent() {
	return (
		<Nav defaultActiveKey="/home" className="flex-column">
			<Nav.Link href="/home">
				<BsHouseDoorFill />
				Beranda
			</Nav.Link>
			<Nav.Link eventKey="link-1">
				<BsFillPeopleFill />
				Personnel list
			</Nav.Link>
			<Nav.Link eventKey="link-2">
				<BsCalendar3 />
				Daily Attendance
			</Nav.Link>
		</Nav>
	);
}
