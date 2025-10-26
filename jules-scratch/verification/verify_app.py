from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Get the absolute path to the index.html file
    file_path = os.path.abspath('index.html')

    # Go to the local HTML file
    page.goto(f'file://{file_path}')

    # Take a screenshot of the default theme
    page.screenshot(path='jules-scratch/verification/default-theme.png')

    # Change the theme to "TFT"
    page.select_option('#theme-select', 'theme-tft')
    page.screenshot(path='jules-scratch/verification/tft-theme.png')

    # Click on a topic
    page.click('text=Food Science')

    # Click on a flashcard to flip it
    page.click('.flashcard')
    page.screenshot(path='jules-scratch/verification/flipped-card.png')

    # Click the "Read Aloud" button
    page.click('.tts-btn')

    # Click the "Play" button for the background music
    page.click('#play-pause-btn')

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
