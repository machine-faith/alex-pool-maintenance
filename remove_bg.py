from PIL import Image
import sys

def main():
    try:
        img = Image.open('public/images/logo.jpg').convert('RGBA')
        datas = img.getdata()

        newData = []
        corners = [datas[0], datas[img.width - 1], datas[(img.height - 1) * img.width], datas[-1]]
        bg_color = (255, 255, 255) if sum(corners[0][:3]) > 380 else (0, 0, 0)
        tolerance = 50
        
        for item in datas:
            if abs(item[0] - bg_color[0]) < tolerance and \
               abs(item[1] - bg_color[1]) < tolerance and \
               abs(item[2] - bg_color[2]) < tolerance:
                newData.append((255, 255, 255, 0)) 
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save('public/images/logo-transparent.png', 'PNG')
        print('Success. Detected background:', bg_color)
    except Exception as e:
        print('Error:', e)

if __name__ == '__main__':
    main()
