import {
  Workshop, 
  EventType, 
  Invitation, 
  RegistrationReceipt, 
  Widget, 
  Team, 
  Request, 
  RegistrationForm,
  Merchandise, 
  UploadedFile,
  Mentor
} from '../models'

export type InitialState = {
  isFetching: boolean,
  getWorkshopsLoading: boolean,
  workshops: Workshop[],
  workshopsCount: number,
  events: EventType[],
  event: Event,
  registeredEvents: EventType[],
  uploadedFile: UploadedFile,
  myInvitations: Invitation[],
  teamInvitations: Invitation[],
  allRegistrationReceipts: RegistrationReceipt[],
  registrationReceipt: RegistrationReceipt,
  widgets: Widget,
  allEventTeams: Team[],
  teamsRequests: object,
  myWorkshops: Workshop[],
  registrationForm: RegistrationForm,
  merchandise: Merchandise,
  discountedPrice: Number,
  team: Team,
  certificateLink: String,
  playerId: Object,
  teamCurrentState: { uuid: string, paperId: string, currentStateName: string, teamEnterTimeToState: string },
};

