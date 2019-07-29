# camera-app
An infra-red triggered wildlife camera app for the raspberry pi.


access using http://192.168.1.107/

to run program use
```
sudo ./camera-app --bind=":80"
```


# How to cross compile for zero W
env GOOS=linux GOARCH=arm GOARM=5 go build


# SSH and 

# scp for copying files
scp -r [from] [to]
scp -r ./camera-app "pi@192.168.1.106:/home/pi/camera-app"