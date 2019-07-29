package wildlifecam

// A struct to represent the settings of the camera
type settings struct {
	Capture        bool
	CameraName     string
	Sharpness      int
	Contrast       int
	Brightness     int
	Saturation     int
	Iso            int
	EvCompensation int
	Orientation    string
	ExposureMode   string
	Awb            string
	Metering       string
}
