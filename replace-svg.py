import argparse
import os
from bs4 import BeautifulSoup

def replace_svg(file_path):
  with open(file_path, 'r+') as f:
    soup = BeautifulSoup(f, features="lxml")
    imgs = soup.find_all("img")
    for i in imgs:
      img_url = i["src"]
      img_url.replace("opt/", "")
      if os.path.splitext(img_url)[1] == ".svg":
        try:
          class_name = i["class"]
        except KeyError:
          class_name = None
        try:
          id = i["id"]
        except KeyError:
          id = None
        with open(i["src"], "r") as svg:
          svg_node = BeautifulSoup(svg.read(), features="lxml").find("svg")
          if class_name != None:
            svg_node["class"] = class_name
          if id != None:
            svg_node["id"] = id
        i.replace_with(svg_node)
  return(soup.prettify(formatter="minimal"))

def create_file(string, output_path):
  with open(output_path, "w") as f:
    f.write(string)
      

if __name__ == '__main__':
  parser = argparse.ArgumentParser()
  parser.add_argument('file_path', nargs=1)
  parser.add_argument('output_path', nargs=1)
  new_file = replace_svg(parser.parse_args().file_path[0])
  create_file(new_file, parser.parse_args().output_path[0])
