import { InputAdornment, styled, TextField } from "@mui/material";
import Instagram from "../../assets/icons/HeaderInstagram.svg";
import Telegram from "../../assets/icons/HeaderTelegram.svg";
import WhatsApp from "../../assets/icons/HeaderWhatsApp.svg";
import Telephone from "../../assets/icons/CallIcon.svg";
import theMap from "../../assets/icons/JpsIcon.svg";
import hour from "../../assets/icons/TimeIcon.svg";
import MEDCHECK from "../../assets/icons/HealthCheckMainIcon.svg";
import search from "../../assets/icons/SearchIcon.svg";
import Button from "../../components/UI/CustomUI/Button";
import AuthDropdown from "../../components/UI/menuItem/AuthDropdown";

const Text = [
	{
		title: "О клинике",
	},
	{
		title: "Услуги",
	},
	{
		title: "Врачи",
	},
	{
		title: "Прайс",
	},
	{
		title: "Контакты",
	},
];

const UserHeader = () => {
	return (
		<Header>
			<div>
				<Content>
					<ContentCards>
						<ContentNom>
							<ContainerNom>
								<SentryImg src={theMap} alt="" />
								<p>106452, г. Бишкек, Гражданская 119</p>
							</ContainerNom>
							<ContainerNom>
								<SentryImg src={hour} alt="" />
								<p style={{ color: "#009344" }}>пн-сб</p>
								<p>08:00 до 18:00</p>
							</ContainerNom>
						</ContentNom>
						<ContentInput>
							<Input
								fullWidth
								size="small"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<img
												style={{ cursor: "pointer", marginRight: "20px" }}
												src={search}
												alt=""
											/>
										</InputAdornment>
									),
								}}
								type="text"
								placeholder="Поиск по сайту"
							/>
						</ContentInput>
						<ContainerCards>
							<IconContainer>
								<a href="https://www.instagram.com/_i.a.n.05_/">
									<ImgNetworks src={Instagram} alt="Instagram" />
								</a>
								<ImgNetworks src={Telegram} alt="Telegram" />
								<ImgNetworks src={WhatsApp} alt="WhatsApp" />
							</IconContainer>
							<ContentNumber>
								<NumberCards>
									<img src={Telephone} alt="Telephone" />
									<span>+996(800) 000 000</span>
								</NumberCards>
								<Span>+996(505) 000 000</Span>
							</ContentNumber>
							<AuthDropdown />
						</ContainerCards>
					</ContentCards>
					<HR />
					<ContentCards>
						<BoxContent>
							<img src={MEDCHECK} alt="medcheck" />
							{Text.map((item, index) => (
								<div key={index}>
									<Title>{item.title}</Title>
								</div>
							))}
							<ContentButton>
								<Button
									style={{
										width: "205px",
										height: "43px",
										borderRadius: "24px",
										border: "1px solid #048741",
										padding: "10px",
										fontSize: "14px",
										color: "#048741",
									}}
									variant="text">
									получить результаты
								</Button>
								<Button
									style={{
										width: "158px",
										height: "43px",
										borderRadius: "24px",
										padding: "10px",
										fontSize: "14px",
									}}>
									запись онлайн
								</Button>
							</ContentButton>
						</BoxContent>
					</ContentCards>
				</Content>
			</div>
		</Header>
	);
};

export default UserHeader;

const Header = styled("header")(() => ({
	padding: "10px",
}));

const Content = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
}));

const ContentCards = styled("div")(() => ({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
}));

const ContentNom = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	marginRight: "80px",
}));

const ContainerNom = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	gap: "5px",
}));

const SentryImg = styled("img")(() => ({
	width: "20px",
	height: "20px",
}));

const ContentInput = styled("div")(() => ({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginLeft: "20px",
}));

const ContainerCards = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
	gap: "35px",
}));

const HR = styled("hr")(() => ({
	width: "1200px",
	marginTop: "13px",
	border: "1px solid #D9D9D9",
}));

const Input = styled(TextField)(() => ({
	"& .MuiOutlinedInput-root": {
		// height: "42px",
		borderRadius: "24px",
		width: "367px",
		height: "40px",
		backgroundColor: "#F3F1F1",
		padding: " 0 0 0 5px",
	},
	"& .MuiOutlinedInput-notchedOutline": {
		borderRadius: "24px",
		border: "none",
		outline: "none",
		// border: "1px solid black",
	},
	// "& .MuiInputBase-input": {
	//   padding: "0 10px",
	//   backgroundColor: "#F3F1F1",
	// },
}));
const ContentNumber = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
}));

const Span = styled("span")(() => ({
	marginLeft: "24px",
}));

const NumberCards = styled("div")(() => ({
	display: "flex",
	alignItems: "center",
}));

const BoxContent = styled("div")(() => ({
	display: "flex",
	gap: "50px",
	alignItems: "center",
	marginTop: "14px",
}));

const ContentButton = styled("div")(() => ({
	display: "flex",
	justifyContent: "flex-end",
	gap: "1rem",
}));

const IconContainer = styled("div")(() => ({
	display: "flex",
	gap: "10px",
	marginLeft: "35px",
	// margin: "0 auto",
}));

const ImgNetworks = styled("img")(() => ({
	width: "32px",
	height: "32px",
	cursor: "pointer",
}));

const Title = styled("p")(() => ({
	cursor: "pointer",
}));
