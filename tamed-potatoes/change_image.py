from browser import document, html

###################################################################################################################################################################################################################################################


Left = document["left"]
Right = document["right"]
Image = document["image"]

CurrentImage = 1

###################################################################################################################################################################################################################################################

class AppData():

    class Internal():

        def UpdateImage():

            global SetTemperatureInternalValue
            global SetTemperatureLabel
            global SetCelciusLabel

            if CurrentImage == 1:
                
                DisplayImage = html.IFRAME(width = "560", height = "315", src="https://www.youtube.com/embed/OIqV-1QUokg", frameborder="0", allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
                # <iframe width="560", height="315", src="https://www.youtube.com/embed/QH2-TGUlwu4", frameborder="0", allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowfullscreen></iframe>
                
            else:
            
                DisplayScreenshot = "screenshots/screenshot_" + str(CurrentImage - 1) + ".png"
                DisplayImage = html.IMG(src=DisplayScreenshot, height="315", width="560", draggable="false")
                
            Image.text = ""
            Image <= DisplayImage
            
            return

    class Pressed():

        def LeftPressed(event):
            
            global CurrentImage

            CurrentImage -= 1
            
            if CurrentImage == 0:
            
                CurrentImage = 15
            
            AppData.Internal.UpdateImage()

            return

        def RightPressed(event):

            global CurrentImage

            CurrentImage += 1
            
            if CurrentImage == 16:
            
                CurrentImage = 1
                
            AppData.Internal.UpdateImage()

            return

###################################################################################################################################################################################################################################################

Left.bind("click", AppData.Pressed.LeftPressed)
Right.bind("click", AppData.Pressed.RightPressed)

"""
DecreaseTemperatureButton = html.CENTER(html.BUTTON(html.IMG(src="./minus.png", height="50", width="50"), id="DecreaseTemperature").bind("click", AppData.ControlTemperature.DecreaseTemperature))
IncreaseTemperatureButton = html.CENTER(html.BUTTON(html.IMG(src="./plus.png", height="50", width="50"), id="IncreaseTemperature").bind("click", AppData.ControlTemperature.IncreaseTemperature))

Interface <= DecreaseTemperatureButton
Interface <= IncreaseTemperatureButton
"""
