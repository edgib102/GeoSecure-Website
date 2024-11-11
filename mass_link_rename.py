import os
import re

def rename_files_and_update_links(directory):
    # Step 1: Rename files in the directory
    renamed_files = {}  # Dictionary to keep track of old and new names
    for filename in os.listdir(directory):
        if filename.endswith('.html') and '_' in filename:
            new_filename = filename.replace('_', '-')
            os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))
            renamed_files[filename] = new_filename
    
    # Step 2: Update links in each HTML file
    for filename in os.listdir(directory):
        if filename.endswith('.html'):
            file_path = os.path.join(directory, filename)
            with open(file_path, 'r', encoding='utf-8') as file:
                content = file.read()
                
            # Replace old links with new links based on the renamed_files dictionary
            for old_name, new_name in renamed_files.items():
                content = re.sub(r'\b' + re.escape(old_name) + r'\b', new_name, content)
                
            # Write the updated content back to the file
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(content)

    print("File renaming and link updating complete.")

# Usage
directory = 'D:\Programming\Geosecure\code\GeoSecure-Website'  # Replace with your directory path
rename_files_and_update_links(directory)
